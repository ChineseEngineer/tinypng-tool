<template>
  <div id="wrapper" class="tinypng">
    <section class="upload">
      <figure class="cloud-one"></figure>
      <figure class="cloud-two"></figure>
      <figure class="bamboo"></figure>
      <figure class="panda"></figure>
      <figure class="grass"></figure>
      <section class="target">
        <figure class="icon"></figure>
        <p>Drop your .png or .jpg files here!</p>
        <p>
          <small>Up to 20 images, max 5 MB each.</small>
        </p>
        <input type="file" multiple="multiple" />
      </section>
      <div>
        <section class="files">
          <ul></ul>
          <div style="display: none;">
            <div class="goprobox">
              <div class="bulletspecs">
                <h2>
                  Sign up for
                  <strong>Web Interface Pro</strong>
                </h2>
                <p>
                  Get your Pro account for the online
                  <strong>drag and drop</strong> web&nbsp;interface!
                </p>
                <ul>
                  <li>Drag and drop more than 20&nbsp;images at&nbsp;once</li>
                  <li>Upgrade 5&nbsp;MB to 75&nbsp;MB filesize limit</li>
                  <li>Show detailed statistics on the Analyzer&nbsp;tool</li>
                  <li>Lots of hugs from Panda George</li>
                </ul>
                <p>
                  Your Pro account will entitle you to a full year of compressing images with the
                  <strong>drag and drop</strong> web interface. You can either sign up as an individual or with your entire team. Make sure everyone on the team has access to this mail address in case you are signing up as a team. You can cancel the automatic renewal of a subscription anytime.
                </p>
                <p>
                  WordPress, Magento or Developer API user and need to compress more? You can upgrade to the
                  <a href="/dashboard/api">flexible plan</a>.
                </p>
                <p>
                  <em>Payments are securely handled by our payment partners Stripe and PayPal. All prices include sales tax (VAT) when applicable.</em>
                </p>
              </div>
              <form class="main propayment">
                <div class="details">
                  <h2>Yearly subscription</h2>
                  <p>
                    <span class="quantity">
                      <input
                        type="number"
                        name="copies"
                        id="copies"
                        maxlength="3"
                        autocomplete="off"
                        tabindex="1"
                        pattern="[0-9]*"
                      />
                      <span class="controls">
                        <a class="up">
                          <span></span>
                        </a>
                        <a class="down">
                          <span></span>
                        </a>
                      </span>
                      <label for="copies">
                        <span class="description">user</span>
                        <strong>$</strong>
                        <strong class="price">25</strong> per year
                      </label>
                    </span>
                  </p>
                  <h2>Personal information</h2>
                  <div class="personalinfo">
                    <p class="smartlayout">
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        autocomplete="name"
                        tabindex="2"
                        placeholder=" Name "
                        required="required"
                        class="fullname"
                      />
                      <label for="fullName">Name</label>
                    </p>
                    <p class="smartlayout">
                      <input
                        type="email"
                        name="mail"
                        id="mail"
                        autocomplete="email"
                        placeholder=" Email address"
                        tabindex="3"
                        required="required"
                        class="email"
                      />
                      <label for="mail">Email</label>
                    </p>
                  </div>
                  <h2>Payment details</h2>
                  <div class="card showcard">
                    <div class="newcard">
                      <p>
                        <input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          autocomplete="cc-number"
                          tabindex="4"
                          pattern="[0-9]*"
                          class="cardnumber"
                        />
                        <label for="cardNumber">Credit card number</label>
                      </p>
                      <p>
                        <input
                          type="number"
                          name="cardExpMonth"
                          id="cardExpMonth"
                          autocomplete="cc-exp-month"
                          tabindex="5"
                          placeholder="mm"
                          maxlength="2"
                          pattern="[0-9]*"
                          class="number month"
                        />
                        <input
                          type="number"
                          name="cardExpYear"
                          id="cardExpYear"
                          autocomplete="cc-exp-year"
                          tabindex="6"
                          placeholder="yyyy"
                          maxlength="4"
                          pattern="[0-9]*"
                          class="number year"
                        />
                        <label for="cardExpMonth">Expiration date</label>
                      </p>
                      <p>
                        <input
                          type="text"
                          name="cardCvc"
                          id="cardCvc"
                          tabindex="7"
                          autocomplete="cc-csc"
                          maxlength="4"
                          pattern="[0-9]*"
                          class="number"
                        />
                        <label for="cardCvc">CVC code</label>
                      </p>
                    </div>
                  </div>
                  <div class="vat">
                    <input type="checkbox" name="europeanCompany" id="europeanCompany" tabindex="8" />
                    <label for="europeanCompany">I have a European VAT number</label>
                    <p>
                      <input
                        type="text"
                        name="vatNumber"
                        id="vatNumber"
                        tabindex="9"
                        placeholder="e.g. DK12345678"
                        class="vat"
                      />
                      <label for="vatNumber">VAT number</label>
                    </p>
                  </div>
                  <div class="submit">
                    <p>
                      By submitting you agree to the
                      <a href="/terms">terms of use</a>.
                    </p>
                    <span>
                      No creditcard? Use&nbsp;
                      <label>PayPal</label>!
                    </span>
                    <p>
                      <button tabindex="10" class="success">
                        <p>Sign up for Pro</p>
                      </button>
                      <a class="cancel">Cancel</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section class="gopro">
          <span>Like to compress more?</span>
          <button class="success">Go Pro!</button>
        </section>
      </div>
      <!---->
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/css/tinypng-main.css");
#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}

.tinypng {
  color: green;
}
</style>