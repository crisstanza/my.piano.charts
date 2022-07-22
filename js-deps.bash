#!/bin/bash

clear ; cd "$(dirname "$0")"

DEPS=()
DEPS+=('io.github.crisstanza.I18N.js@i18n')
DEPS+=('io.github.crisstanza.Creator.js@creator')
DEPS+=('io.github.crisstanza.Cookie-Is-Good_1.0.3.js@Cookie-Is-Good')

updateAll() {
	for DEP in ${DEPS[*]} ; do
		PARTS=(${DEP//@/ })
		LIBRARY=${PARTS[0]}
		REPOSITORY=${PARTS[1]}
		curl -o js/lib/${LIBRARY} https://raw.githubusercontent.com/crisstanza/${REPOSITORY}/master/js/${LIBRARY}
	done
}

updateAll
