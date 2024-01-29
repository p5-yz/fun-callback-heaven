const request = require('../utils/server');

function checkServerStatus(callBackFn) {
  request('/status', callBackFn);
}

// const callBackFn = (err, content) => {
//   if (err) console.log(err);
//   else content.data.copyrightYear = 2023;
// };

function fetchBannerContent(callBackFn) {
  request('/banner', (error, content) => {
    if (error) {
      callBackFn(error);
    } else {
      const newContent = { ...content };
      newContent.copyrightYear = 2023;
      callBackFn(error, newContent);
    }
  });
}

function fetchAllOwners() {}

function fetchCatsByOwner() {}

function fetchCatPics() {}

function fetchAllCats() {}

function fetchOwnersWithCats() {}

function kickLegacyServerUntilItWorks() {}

function buySingleOutfit() {}

module.exports = {
  buySingleOutfit,
  checkServerStatus,
  kickLegacyServerUntilItWorks,
  fetchAllCats,
  fetchCatPics,
  fetchAllOwners,
  fetchBannerContent,
  fetchOwnersWithCats,
  fetchCatsByOwner
};
