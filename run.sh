docker build . -t my_mongo_image       #Comment this line if you do not want to build each time

export MSYS_NO_PATHCONV=1
docker run -d --name my_mongo_container -p 27017:27017 -it --rm -v ${PWD}/mongo/data:/data/db my_mongo_image
