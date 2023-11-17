from flask import Flask, Response ,request, render_template,jsonify
import matplotlib.pyplot as plt
from io import BytesIO

app = Flask(__name__)

@app.route('/')
def plot_response():
    try:
        # Create a simple Matplotlib plot
        x = [1, 2, 3, 4, 5]
        y = [2, 4, 6, 8, 10]

        plt.plot(x, y)
        plt.title('Simple Matplotlib Plot')
        plt.xlabel('X-axis')
        plt.ylabel('Y-axis')

        # Save the plot to a BytesIO buffer
        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)

        # Return the plot as a response
        return Response(buffer, content_type='image/png')
    except Exception as e:
        return str(e), 500
    
@app.route('/htmlpage')
def htmlpage():
    a = 5
    b = 6
    data = {"a": 15, "b": 21}
    return render_template('hello.html', data=data)


@app.route('/int')
def int():
     return str(5)

@app.route('/problem', methods=['POST'])
def problem():
    data = request.form  # Access form data from the request
    a = int(data['a'])  # Assuming 'a' is a form field
    b = int(data['b'])  # Assuming 'b' is a form field

    if a > b:
        greater = a
    elif b > a:
        greater = b
    else:
        greater = "equal"

    return str(greater)

if __name__ == '__main__':
    app.run()
