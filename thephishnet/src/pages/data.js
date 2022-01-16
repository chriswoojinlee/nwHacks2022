export const safe = {
    imgEnd: true,
    info: 'No phish to be found. This website is safe for use.',
    img: require('../images/The_Phish_Net.png').default,
    color: false,
};

export const phish = {
    imgEnd: false,
    info:'That’s fishy! This website has been found to be a scam.',
    img: require('../images/The_Phish_Net.png').default,
    color: true,
};

export const warning = {
    imgEnd: false,
    info: 'Maybe a phish, maybe not a phish? Proceed with your own caution.',
    img: require('../images/The_Phish_Net.png').default,
    color: true,
};