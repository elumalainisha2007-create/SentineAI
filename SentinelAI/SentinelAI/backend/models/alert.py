from sqlalchemy import Column, Integer, String
from . import Base

class Alert(Base):
    __tablename__ = 'alerts'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user = Column(String, nullable=False)
    activity = Column(String, nullable=False)
    risk = Column(Integer, nullable=False)
    status = Column(String, default='unresolved')

    def __repr__(self):
        return f"<Alert(user='{self.user}', activity='{self.activity}', risk={self.risk}, status='{self.status}')>"