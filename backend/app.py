from flask import Flask
from flask_restful import Api, Resource
import requests
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'


class Stations(Resource):
    @cross_origin()
    def get(self):
        req = requests.get('https://gbfs.bcycle.com/bcycle_madison/station_information.json')
        return req.json()


class StationsStatus(Resource):
    
    @cross_origin()
    def get(self):
        req = requests.get('https://gbfs.bcycle.com/bcycle_madison/station_status.json')
        return req.json()


api.add_resource(Stations, '/api/stations')
api.add_resource(StationsStatus, '/api/stationsStatus')

if __name__ == "__main__":
    app.run(debug=True)
