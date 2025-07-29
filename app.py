from flask import Flask, request, jsonify

app = Flask(__name__)

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
        return jsonify({"error": str(e)}), 500