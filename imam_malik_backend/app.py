from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

# ✅ Create Flask app and enable CORS
app = Flask(__name__)
CORS(app)

# ✅ Load sentence transformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

# ✅ Load hadith texts
with open('imam_malik_texts_for_server.json', 'r', encoding='utf-8') as f:
    texts = json.load(f)

# ✅ Load FAISS index and embeddings
embeddings = np.load('imam_malik_embeddings.npy')
index = faiss.read_index('imam_malik_faiss.index')

@app.route('/')
def home():
    return "Imam Malik Chatbot API is running."

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    query = data.get('query')

    if not query:
        return jsonify({'error': 'Query is missing'}), 400

    # Convert query to embedding
    query_embedding = model.encode([query])

    # Search using FAISS
    D, I = index.search(np.array(query_embedding).astype('float32'), k=1)

    best_index = I[0][0]
    best_text = texts[best_index]['text']

    return jsonify({'text': best_text})

# ✅ Correct _name_ check
if __name__ == '__main__':
    app.run(debug=True)