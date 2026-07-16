from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, default='user')  # roles can be 'user', 'admin', etc.

    def __repr__(self):
        return f"<User(id={self.id}, username='{self.username}', role='{self.role}')>"