import { Oauth2Scheme } from '~auth/runtime'

export default class OAuth2Scheme extends Oauth2Scheme {
  logout() {
    if (this.options.endpoints.logout) {
      const token = this.token.get()?.split(' ')?.[1]
      const opts = {
        client_id: this.options.clientId + '',
        logout_uri: this.logoutRedirectURI,
        access_token: token,
      }
      const url =
        this.options.endpoints.logout + '?' + new URLSearchParams(opts)
      window.location.replace(url)
    }
    return this.$auth.reset()
  }
}
