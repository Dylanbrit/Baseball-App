// Home Team Base Running Functions
const advanceRunnerOnSingle = () => {
    if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
    }
}

const advanceRunnerOnDouble = () => {
    if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
    }
}

const advanceRunnerOnTriple = () => {
    if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
    }
}

const advanceRunnerOnHomeRun = () => {
    if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        homeScore++
        home.innerHTML = homeScore
    }
}

const advanceRunnerOnBalls = () => {
    if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
        homeScore++
        home.innerHTML = homeScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
    }
}

// Away Team Base Running Functions
const advanceRunnerOnSingleAway = () => {
    if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
    }
}

const advanceRunnerOnDoubleAway = () => {
    if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
    }
}

const advanceRunnerOnTripleAway = () => {
    if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
    }
}

const advanceRunnerOnHomeRunAway = () => {
    if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = ''
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
        visitorScore++
        visitor.innerHTML = visitorScore
    }
}

const advanceRunnerOnBallsAway = () => {
    if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
        visitorScore++
        visitor.innerHTML = visitorScore
    } else if (firstBaseEl.value === 'Runner On' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = ''
    } else if (firstBaseEl.value === '' && secondBaseEl.value === 'Runner On' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = 'Runner On'
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === 'Runner On') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = 'Runner On'
    } else if (firstBaseEl.value === '' && secondBaseEl.value === '' && thirdBaseEl.value === '') {
        firstBaseEl.value = 'Runner On'
        secondBaseEl.value = ''
        thirdBaseEl.value = ''
    }
}