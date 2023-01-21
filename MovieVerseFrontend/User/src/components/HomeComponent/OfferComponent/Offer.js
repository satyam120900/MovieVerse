import React from 'react';
import { Carousel } from 'react-bootstrap';

const Offer = () => {
  return (
    <div>
      <div style={{ "display": "flex" }}>
        <h3><b style={{ "color": "green" }}>|</b></h3>
        <h2 style={{ fontFamily: "'Piedra',cursive","color":"white" }}>Bank Offers</h2>
      </div>
        <Carousel variant="dark" interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/icici-bank-25percent-discount-offer-icicicc520.jpg?01102022013648"
              alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?29112022183412"
              alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/icici-bank-complimentary-offer-iciccom520.jpg?25112022164502"
              alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/au-credit-card-offer-aucc1221.jpg?28112022174829"
              alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/rbl-bank-younique-credit-card-offer-rblyouc520.jpg?26092022183452"
              alt="Fifth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/hdfc-bank-timescard-offer-htc0314.jpg?30092022113405"
              alt="Sixth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/idfc-first-bank-private-credit-card-offer-idfccc0921.jpg?11072022123115"
              alt="Seventh slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/union-bank-debit-and-credit-card-offer-union0122.jpg?31102022111537"
              alt="Eighth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/standard-chartered-bank-debit-and-credit-card-offer-stanc0422.jpg?30092022115827"
              alt="Ningth slide" />
          </Carousel.Item>
        </Carousel>

        <br />
        <div style={{ "display": "flex" }}>
        <h3><b style={{ "color": "green" }}>|</b></h3>
        <h2 style={{ fontFamily: "'Piedra',cursive","color":"white" }}>Rewards</h2>
        </div>
        <Carousel variant="dark" interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/buy-2-tickets-and-get-%E2%82%B9-75-off-bms75.jpg?23112022172912"
              alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/sbisimclik.jpg?04012017151200"
              alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/twid---pay-with-rewards-twidpay1222.jpg?01122022171252"
              alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/pvr-privilege-points-pvrprivilege.jpg?01112022102909"
              alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/rewards-point-redemption-rewardpoints.jpg?15022021162949"
              alt="Fifth slide" />
          </Carousel.Item>
        </Carousel>

        <br />
        <div style={{ "display": "flex" }}>
        <h3><b style={{ "color": "green" }}>|</b></h3>
        <h2 style={{ fontFamily: "'Piedra',cursive","color":"white" }}> Wallet</h2>
        </div>
        <Carousel variant="dark" interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/payzapp-cashback-offer-payzapp1221.jpg?30112022235114"
              alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/amazon-pay-cashback-offer-amazonpaycb1222.jpg?30112022234941"
              alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/paytm-cashback-offer-paytmcb1222.jpg?01122022125729"
              alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/mobikwik-cashback-offer-mbkcb1222.jpg?30112022235702"
              alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://in.bmscdn.com/offers/tncbanner/inoxunlrefill-inoxunlrefill.jpg?03102022173227"
              alt="Fifth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
  )
}

export default Offer