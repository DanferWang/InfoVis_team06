from flask import Flask, jsonify, render_template, request
import pandas as pd

data=pd.read_csv('./static/dataset.csv')

app = Flask(__name__)


@app.route('/_add_numbers')
def add_numbers():
    w1 = request.args.get('a', 0, type=int)
    w2 = request.args.get('b', 0, type=int)
    w3 = request.args.get('c', 0, type=int)
    w4 = request.args.get('d', 0, type=int)
    w5 = request.args.get('e', 0, type=int)
    res = weighted(w1,w2,w3,w4,w5)
    return jsonify(result=res)


@app.route('/')
def index():
    return render_template('LX.html')




def weighted(w1,w2,w3,w4,w5):
    #Normalized
    tw = w1+w2+w3+w4+w5
    W1 = w1/tw
    W2 = w2/tw
    W3 = w3/tw
    W4 = w4/tw
    W5 = w5/tw
    
    Scores = data.EPI*W1 + data.COL*W2 + data.International*W3 + data.Quality*W4 + data.EHCI*W5
    Scores = Scores.round(1)
    Subset = list(zip(data.Country,Scores))
    df = pd.DataFrame(data = Subset, columns=['Country', 'Scores'])
    Sorted = df.sort_values(['Scores'], ascending=False)
    Sorted['Rank'] = range(1,32)
    res = Sorted.sort_values(by='Country')
    res = res.Scores.to_list()
    return res


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000,debug=True)
