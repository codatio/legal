variable VERSION {
    default = "dev"
}

variable DOCKER_REGISTRY {
    default = "codatintgregistry.azurecr.io/"
}

group "default" {
    targets = [
        "build",
        "app"
    ]
}

target "build" {
    context    = "./"
    dockerfile = "deployment/docker/build.dockerfile"
    args       = {
        DOCKER_REGISTRY = "${DOCKER_REGISTRY}"
    }
    tags       = [ "codat.legal.build:${VERSION}" ]
}

target "app" {
    contexts   = { "build" = "target:build" }
    dockerfile = "Dockerfile"
    tags       = [ "codat.legal.ui:${VERSION}" ]
}
