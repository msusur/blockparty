module.exports = function(deployer) {
  deployer.deploy(Conference);
  deployer.deploy(Bounty);
  deployer.deploy(DemoBounty);
  deployer.autolink();
};
