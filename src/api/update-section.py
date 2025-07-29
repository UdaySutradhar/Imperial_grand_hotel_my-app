from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length'))
        body = self.rfile.read(content_length)
        data = json.loads(body)

        print("Backend is running. POST to /update-section.")
        print(f"Received: {data}")

        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        response = {"message": "Edit logged successfully!"}
        self.wfile.write(json.dumps(response).encode())
