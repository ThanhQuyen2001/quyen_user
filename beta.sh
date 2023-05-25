read_var() {
  if [ -z "$1" ]; then
    echo "environment variable name is required"
    return 1
  fi

  local ENV_FILE='.env'
  if [ ! -z "$2" ]; then
    ENV_FILE="$2"
  fi

  local VAR=$(grep $1 "$ENV_FILE" | xargs)
  IFS="=" read -ra VAR <<< "$VAR"
  echo ${VAR[1]}
}

endpoint=$(read_var REGISTRY)

sed -i -e "3 s/VUE_APP_VERSION=.*/VUE_APP_VERSION=$(date '+%Y.%m.%d.%H.%M')/" ./.env.beta
sed -i -e "3 s/VUE_APP_VERSION=.*/VUE_APP_VERSION=$(date '+%Y.%m.%d.%H.%M')/" ./.env
cat ./.env.beta

echo "Building and pushing dockerfile to $endpoint:beta..."
  vue-cli-service build --mode beta  && docker build -t $endpoint:beta . && docker push $endpoint:beta

rm -rf dist
