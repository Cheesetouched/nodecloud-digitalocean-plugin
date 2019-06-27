const Account = require('./account/do-account')
const Droplets = require('./compute/do-droplets')
const LoadBalancers = require('./networking/do-load-balancers')
const Volumes = require('./storage/do-volumes')

class DO {
	/**
   * Expose DigitalOcean APIs
   * @constructor
   */
  constructor(token,doSDK) {
		this._doToken = token;
		this._DO = doSDK;

		return {
			getSDK: () => this._DO,
      getToken: () => this._doToken,
      account: this.Account,
      droplets: this.Droplets,
      loadbalancers: this.LoadBalancers,
      volumes: this.Volumes
		};
  }

  /**
   * Account - Account & SSH Wrapper
   * @Droplets
   */
  Account() {
    return new Account(this.getSDK(), this.getToken());
  }

	/**
   * Compute - Droplets Wrapper
   * @Droplets
   */
  Droplets() {
    return new Droplets(this.getSDK(), this.getToken());
  }

  /**
   * Networking - Load Balancers Wrapper
   * @LoadBalancers
   */
  LoadBalancers() {
    return new LoadBalancers(this.getSDK(), this.getToken());
  }

  /**
   * Storage - Volumes Wrapper
   * @Volumes
   */
  Volumes() {
    return new Volumes(this.getSDK(), this.getToken());
  }
}

module.exports = DO;