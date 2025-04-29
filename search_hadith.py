from sentence_transformers import SentenceTransformer, util
import numpy as np
import faiss
import json

# ✅ Load Model
model = SentenceTransformer('all-MiniLM-L6-v2')

# ✅ Load FAISS index
index = faiss.read_index('imam_malik_faiss.index')

# ✅ Load Hadith texts
with open('imam_malik_texts_for_server.json', 'r', encoding='utf-8') as f:
    texts = json.load(f)

print("✅ Model, Index and Texts loaded!")

# ✅ Function to search a Hadith
def search_hadith(user_question):
    # Embed the question
    question_embedding = model.encode([user_question])
    
    # Search in FAISS
    D, I = index.search(np.array(question_embedding), k=3)  # Top 3 matches
    
    # Print best matches
    for rank in range(len(I[0])):
        hadith_index = I[0][rank]    # index inside texts list
        similarity_score = D[0][rank]  # similarity score

        if hadith_index < len(texts):  # Safety check
            print("\n📖 Hadith:", texts[hadith_index])
            print("📊 Similarity Score:", similarity_score)

# ✅ Now try asking your question here
user_question = input("Ask Imam Malik a question: ")
search_hadith(user_question)
