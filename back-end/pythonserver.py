import json
import requests
from http.server import HTTPServer, BaseHTTPRequestHandler


class Serv(BaseHTTPRequestHandler):

    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
            try:
                file_to_open = open(self.path[1:]).read()
                self.send_response(200)
            except:
                data = {'temperature': '24.3'}
                data_json = json.dumps(data)
                file_to_open = "JSON"
                self.send_response(404)
            self.end_headers()
            self.wfile.write(bytes(data_json, 'utf-8'))
        if self.path == '/home':
            self.path = '/index.html'
            try:
                file_to_open = open(self.path[1:]).read()
                self.send_response(200)
            except:
                data = {'temperature': '24.3'}
                data_json = json.dumps(data)
                file_to_open = "JSON"
                self.send_response(404)
            self.end_headers()
            self.wfile.write(bytes(data_json, 'utf-8'))


httpd = HTTPServer(('localhost', 8080), Serv)
httpd.serve_forever()
