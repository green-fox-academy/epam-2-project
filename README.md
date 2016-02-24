# epam2-project
install node, postgres
npm install -g jasmine

install ruby (add ruby to path during installation)

in terminal:
  gem install sass

work in Localhost:
  npm install -g gulp

  gulp sass (to generate the css)
	
	in terminal:
	psql -U postgres 
	(password: postgres)  
	CREATE TABLE USERS (user_id SERIAL, email TEXT NOT NULL, password TEXT NOT NULL, status TEXT DEFAULT 'user', UNIQUE (email), PRIMARY KEY (user_id));

