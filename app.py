from flask import Flask, request, render_template,flash,redirect,make_response

import requests

app = Flask(__name__)

@app.route('/', methods=['GET'])
def main_site():
	return render_template('index.html')
@app.route("/<string:url>")
def viewAll(url=None):
	if url is None:
		print("here")
		return render_template('index.html')
	else:
		endpoint_url= "https://aa9o8mq5l2.execute-api.ap-south-1.amazonaws.com/Dev/get-website"
		data={"url":url}
		response=requests.post(url=endpoint_url,json=data)
		response=response.json()
		if "website_url" in response:
			return redirect("https://"+response["website_url"])
		else:
			return redirect("/")
if __name__ == '__main__':
	app.run(debug=True)
