from flask import Flask, request, jsonify
from flask_cors import CORS

# 1. Initialize Flask app
app = Flask(__name__)

# 2. Enable CORS (needed for React to communicate with Flask!)
CORS(app)

# 3. Main POST endpoint to log edits from frontend
@app.route("/update-section", methods=["POST"])
def log_edit():
    try:
        data = request.get_json()
        component = data.get("component")
        field = data.get("field")
        new_value = data.get("value")

        print("FRONTEND EDIT DETECTED")
        print(f"Component: {component}")
        print(f"Field: {field}")
        print("New Value:")
        print(new_value)
        print("-" * 50)

        return jsonify({"message": "Edit logged successfully"}), 200
    except Exception as e:
        print("Error logging edit:", str(e))
        return jsonify({"error": str(e)}), 500

# 4. Run the server in debug mode for development
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050, debug=True)
