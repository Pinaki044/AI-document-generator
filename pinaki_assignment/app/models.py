from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from datetime import datetime

db = SQLAlchemy()

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    projects = db.relationship('Project', backref='owner', lazy=True)

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(200), nullable=False)
    doc_type = db.Column(db.String(10), nullable=False)  # docx or pptx
    topic = db.Column(db.Text, nullable=False)
    structure = db.Column(db.JSON, nullable=False)  # keep structure for compatibility
    full_text = db.Column(db.Text, nullable=True)   # NEW: whole document text
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

