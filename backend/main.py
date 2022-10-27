from app import app, mongo
from bson.json_util import dumps
from bson.objectid import ObjectId 
from flask import jsonify, request

# @app.route('/create', methods=['POST'])
# @app.route('/read', methods=['GET'])
# @app.route('/update', methods=['PUT'])
# @app.route('/delete', methods=['DELETE'])

if __name__ == "__main__":
    app.run()