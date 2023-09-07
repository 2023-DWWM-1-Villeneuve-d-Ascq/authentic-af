require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.route');
const cors = require('cors');

//Connexion à la base de données
const connectDB = require('./config/db');

//Middlewares
const app = express();

//Use app  express
app.use(express.json());

//Use bodyParser
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//Use cors
app.use
  (cors({
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200,
  })
  );

//Ecrire bonjour dans le navigateur
app.get('/', (req, res) => {
  res.send('XIAO');
})

//Routes
app.use('/api', authRoutes);
// app.post('/api', authRoutes); ///////////////////////// REGARDER ICI //////////////////////////


//Config et lancement du serveur
const start = async () => {
  try {
    await connectDB();
    const port = process.env.PORT || 6000;
    app.listen(port, () => {
      console.log(`Le serveur à démarré sur le port ${port}`);
    })
  } catch {
    console.log('Erreur lors du démarrage du serveur');
  }
};

start();



// from flask import Flask, request, jsonify
// import bcrypt
// import jwt
// import datetime

// app = Flask(__name__)

// # Exemple de stockage d'administrateurs en mémoire (pour un usage démonstratif uniquement)
// admin_data = []

// # Clé secrète pour la création des JWT
// app.config['SECRET_KEY'] = 'votre_cle_secrete'

// # Point d'extrémité pour l'inscription d'un administrateur
// @app.route('/register', methods=['POST'])
// def register():
//     data = request.get_json()
//     email = data['email']
//     password = data['password']

//     # Hash du mot de passe
//     hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

//     # Enregistrement de l'administrateur (dans la mémoire pour cet exemple)
//     admin_data.append({'email': email, 'password': hashed_password})

//     return jsonify({'message': 'Inscription réussie'})

// # Point d'extrémité pour la connexion de l'administrateur
// @app.route('/login', methods=['POST'])
// def login():
//     data = request.get_json()
//     email = data['email']
//     password = data['password']

//     # Recherche de l'administrateur par adresse e-mail (dans la mémoire pour cet exemple)
//     admin = next((admin for admin in admin_data if admin['email'] == email), None)

//     if admin and bcrypt.checkpw(password.encode('utf-8'), admin['password']):
//         # Création d'un jeton JWT
//         token = jwt.encode({'email': email, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)}, app.config['SECRET_KEY'], algorithm='HS256')
//         return jsonify({'token': token.decode('UTF-8')})
//     else:
//         return jsonify({'message': 'Authentification échouée'}), 401

// if __name__ == '__main__':
//     app.run(debug=True)







// from flask import Flask, request, jsonify
// from flask_sqlalchemy import SQLAlchemy
// from flask_bcrypt import Bcrypt
// import jwt
// import datetime
// from functools import wraps

// app = Flask(__name__)
// app.config['SECRET_KEY'] = 'votre_clé_secrète'  # Remplacez par une clé secrète sécurisée
// app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///votre_base_de_données.db'  # Remplacez par votre URL de base de données

// db = SQLAlchemy(app)
// bcrypt = Bcrypt(app)

// # Modèle de l'administrateur
// class User(db.Model):
//     id = db.Column(db.Integer, primary_key=True)
//     username = db.Column(db.String(100), unique=True, nullable=False)
//     password = db.Column(db.String(100), nullable=False)

// # Fonction pour créer un administrateur
// def create_admin(username, password):
//     hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
//     admin = User(username=username, password=hashed_password)
//     db.session.add(admin)
//     db.session.commit()

// # Middleware pour vérifier l'authentification
// def token_required(f):
//     @wraps(f)
//     def decorated(*args, **kwargs):
//         token = request.headers.get('Authorization')
//         if not token:
//             return jsonify({'message': 'Token manquant'}), 401

//         try:
//             data = jwt.decode(token, app.config['SECRET_KEY'])
//         except:
//             return jsonify({'message': 'Token invalide'}), 401

//         return f(*args, **kwargs)

//     return decorated

// # Route pour s'inscrire en tant qu'administrateur
// @app.route('/register', methods=['POST'])
// def register():
//     data = request.get_json()
//     username = data['username']
//     password = data['password']
    
//     if User.query.filter_by(username=username).first():
//         return jsonify({'message': 'Nom d\'utilisateur déjà utilisé'}), 400

//     create_admin(username, password)
//     return jsonify({'message': 'Inscription réussie'}), 201

// # Route pour se connecter en tant qu'administrateur et obtenir un token
// @app.route('/login', methods=['POST'])
// def login():
//     data = request.get_json()
//     username = data['username']
//     password = data['password']
    
//     user = User.query.filter_by(username=username).first()

//     if not user or not bcrypt.check_password_hash(user.password, password):
//         return jsonify({'message': 'Nom d\'utilisateur ou mot de passe incorrect'}), 401

//     token = jwt.encode({'user_id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)}, app.config['SECRET_KEY'])

//     return jsonify({'token': token.decode('utf-8')}), 200

// # Exemple de route protégée
// @app.route('/protected', methods=['GET'])
// @token_required
// def protected():
//     return jsonify({'message': 'Ceci est une route protégée'})

// if __name__ == '__main__':
//     db.create_all()
//     app.run(debug=True)



// pip install Flask
// pip install Flask-Bcrypt
// pip install Flask-SQLAlchemy
// pip install PyJWT


