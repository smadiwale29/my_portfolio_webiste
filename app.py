from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# DataFrame to hold reviews
reviews_df = pd.DataFrame(columns=['text', 'author', 'designation'])

@app.route('/save-review', methods=['POST'])
def save_review():
    review_data = request.get_json()
    
    # Append new review to DataFrame
    global reviews_df
    reviews_df = pd.concat([reviews_df, pd.DataFrame([review_data])], ignore_index=True)
    
    # Save DataFrame to a CSV file (or use any database)
    reviews_df.to_csv('reviews.csv', index=False)

    # Respond with success message
    return jsonify({"message": "Review saved successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
