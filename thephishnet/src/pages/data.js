export const safe = {
    imgEnd: true,
    info: 'No phish to be found. This website is safe for use.',
    img: require('../images/output-onlinepngtools.png').default,
    color: false
};

export const phish = {
    imgEnd: false,
    info:'That’s fishy! This website has been found to be a scam.',
    img: require('../images/output-onlinepngtools.png').default,
    color: true
};

export const warning = {
    imgEnd: true,
    info: 'Maybe a phish, maybe not a phish? Proceed with your own caution.',
    img: require('../images/output-onlinepngtools.png').default,
    color: true
};