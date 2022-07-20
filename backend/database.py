import sqlalchemy as _sql
import sqlalchemy.ext.declarative as _declarative
import sqlalchemy.orm as _orm
from sqlalchemy_utils import database_exists, create_database

DATABASE_URL = "sqlite:///./database.db"

engine = _sql.create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = _orm.sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = _declarative.declarative_base()

if not database_exists(engine.url):
  create_database(engine.url)
  
print(database_exists(engine.url))