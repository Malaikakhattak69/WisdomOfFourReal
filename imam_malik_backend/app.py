from flask import Flask, request, jsonify
import faiss
import numpy as np
import json
from sentence_transformers import SentenceTransformer

# Load your model and data
model = SentenceTransformer('all-MiniLM-L6-v2')  # Or the one you used originally
index = faiss.read_index('imam_malik_faiss.index')
embeddings = np.load('imam_malik_embeddings.npy')
with open('imam_malik_texts_for_server.json', 'r', encoding='utf-8') as f:
    texts = json.load(f)

app = Flask(__name__)

@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.json.get('question')
    question_embedding = model.encode([user_input])
    D, I = index.search(np.array(question_embedding), k=1)
    response_text = texts[I[0][0]]
    return jsonify({'answer': response_text})

@app.route('/')
def home():
    return 'Imam Malik Chatbot Backend Running!'

if __name__ == '__main__':
    app.run(debug=True)
