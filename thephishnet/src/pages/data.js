export const safe = {
    imgEnd: true,
    info: 'No phishy business here! The given website is safe for use.',
    img: require('../images/Happy_fish.png'),
    color: false,
    alt: "Image"
};

export const phish = {
    imgEnd: false,
    info:'That’s phishy! This website has been found to be a scam.',
    img: require('../images/Sad_fish.png'),
    color: true,
    alt: "Image"
};

export const warning = {
    imgEnd: false,
    info: 'Maybe a phish, maybe not a phish? Proceed with your own caution.',
    img: require('../images/THP.png'),
    color: true,
    alt: "Image"
};