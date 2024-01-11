#!/bin/sh

tag_name=""
version=""
tag_env=""

echo "--- Start building phrase ---"

if [[ ${giteeTargetBranch} == refs/tags/* ]];
then
    echo "--- This is a release tag: ${giteeTargetBranch} ---"
    tag_name=${giteeTargetBranch:11}
    version=${tag_name%_*}
    tag_env=${tag_name#*_}
    git config pull.rebase false

    docker build --build-arg tag_env=${tag_env} --build-arg tag_version=${version} . -t ${ALIYUN_DOCKER_REGISTRY_DOMAIN}/${ALIYUN_DOCKER_REGISTRY_NAMESPACE}/${JOB_BASE_NAME}_${tag_env}:${version}

    IMAGE_ID=$(docker build --build-arg tag_env=${tag_env} --build-arg tag_version=${version} . --quiet -t ${ALIYUN_DOCKER_REGISTRY_DOMAIN}/${ALIYUN_DOCKER_REGISTRY_NAMESPACE}/${JOB_BASE_NAME}_${tag_env}:${version})

    docker login --username=${ALIYUN_DOCKER_USERNAME} ${ALIYUN_DOCKER_REGISTRY_DOMAIN} --password=${ALIYUN_DOCKER_PASSWORD}

    docker tag ${IMAGE_ID} ${ALIYUN_DOCKER_REGISTRY_DOMAIN}/${ALIYUN_DOCKER_REGISTRY_NAMESPACE}/${JOB_BASE_NAME}_${tag_env}:${version}

    docker push ${ALIYUN_DOCKER_REGISTRY_DOMAIN}/${ALIYUN_DOCKER_REGISTRY_NAMESPACE}/${JOB_BASE_NAME}_${tag_env}:${version}

else
    echo "--- This is giteeActionType:${giteeActionType} , skip building ---"
fi

echo "--- Finish building phrase ---"
