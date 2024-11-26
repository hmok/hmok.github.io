import subprocess
import sys

# Install required libraries if not already installed
def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from flask import Flask, request, jsonify, send_file
except ImportError:
    install("flask")
    from flask import Flask, request, jsonify, send_file

try:
    import yt_dlp
except ImportError:
    install("yt-dlp")
    import yt_dlp

try:
    import cv2
except ImportError:
    install("opencv-python")
    import cv2

try:
    from mediapipe import solutions
except ImportError:
    install("mediapipe")
    from mediapipe import solutions

import os

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_video():
    data = request.get_json()
    video_url = data.get("url")

    if not video_url:
        return jsonify({"success": False, "error": "No video URL provided."}), 400

    try:
        # Step 1: Download the YouTube video using yt-dlp
        video_path = "downloaded_video.mp4"
        ydl_opts = {
            "format": "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best",
            "outtmpl": video_path
        }
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([video_url])

        # Step 2: Process the video using MediaPipe Pose
        processed_video_path = "processed_video.mp4"
        process_with_pose_detection(video_path, processed_video_path)

        # Step 3: Return the processed video
        return jsonify({
            "success": True,
            "download_url": f"http://127.0.0.1:5000/download/{processed_video_path}"
        })

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


def process_with_pose_detection(input_path, output_path):
    mp_pose = solutions.pose
    mp_drawing = solutions.drawing_utils

    cap = cv2.VideoCapture(input_path)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = int(cap.get(cv2.CAP_PROP_FPS))

    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

    with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break

            # Convert the frame to RGB
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            results = pose.process(rgb_frame)

            # Draw pose landmarks
            if results.pose_landmarks:
                mp_drawing.draw_landmarks(
                    frame, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

            # Write the processed frame
            out.write(frame)

    cap.release()
    out.release()


@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    return send_file(filename, as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)
