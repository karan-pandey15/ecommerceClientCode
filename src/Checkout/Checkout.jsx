import React from "react";
export default function Checkout() {
  return (
    <div>
      <div class="container bg-light mt-5 border border rounded p-4">
        {/* <main> */}

        {/* <div class="py-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h2>Checkout form</h2>
        <p class="lead">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div> */}

        <div class="row g-5 ">
          <div class="col-md-5 col-lg-4 order-md-last ">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Your cart</span>
              <span class="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul class="list-group mb-3 ">
              <li class="list-group-item d-flex justify-content-between lh-sm m-3">
                <div>
                  <h6 class="my-0">Subtotal:</h6>
                </div>
                <span class="text-body-secondary">$140.00</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm m-3">
                <div>
                  <h6 class="my-0">Delivery:</h6>
                </div>
                <span class="text-body-secondary">Free</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm m-3">
                <div>
                  <h6 class="my-0">Total:</h6>
                </div>
                <span class="text-body-secondary">$140.00</span>
              </li>
            </ul>

            <div className="btn btn-warning btn-lg fs-5">CheckOut</div>

            {/* <form class="card p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" class="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form> */}
          </div>
          <div class="col-md-7 col-lg-8 ">
            <h4 class="mb-3">CheckOut</h4>
            <form class="needs-validation" novalidate="" />
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">
                  First name
                </label>
                <input type="text" id="firstName" class="form-control" />

                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">
                  Last name
                </label>
                <input type="text" id="lastName" class="form-control" />

                <div class="invalid-feedback">Valid last name is required.</div>
              </div>

              <div class="col-12">
                <label for="username" class="form-label">
                  Username
                </label>
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                    required=""
                  />
                  <div class="invalid-feedback">Your username is required.</div>
                </div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">
                  Email <span class="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="col-12">
                <label for="address" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required=""
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="col-12">
                <label for="address2" class="form-label">
                  Address 2 <span class="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div class="col-md-5">
                <label for="country" class="form-label">
                  Country
                </label>
                <select class="form-select" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div class="col-md-4">
                <label for="state" class="form-label">
                  State
                </label>
                <select class="form-select" id="state" required="">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
            </div>

            <div class="my-4">
              <h4 class="mb-3">Payment</h4>

              <div class="my-3">
                <div class="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    checked=""
                    required=""
                  />
                  <label class="form-check-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div class="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    required=""
                  />
                  <label class="form-check-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div class="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    required=""
                  />
                  <label class="form-check-label" for="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div class="row gy-3">
                <div class="col-md-6">
                  <label for="cc-name" class="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                  />
                  <small class="text-body-secondary">
                    Full name as displayed on card
                  </small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>

                <div class="col-md-6">
                  <label for="cc-number" class="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="cc-expiration" class="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>

                <div class="col-md-3">
                  <label for="cc-cvv" class="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>

              <div class="my-4">
                <button class="w-100 btn btn-primary btn-lg" type="submit">
                  Continue to checkout
                </button>
                {/* </form> */}
              </div>
            </div>
            {/* </main> */}
          </div>
          <script
            src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
            crossorigin="anonymous"
          ></script>

          <script src="checkout.js"></script>
        </div>

        {
          // </main>
        }
      </div>
    </div>
  );
}
