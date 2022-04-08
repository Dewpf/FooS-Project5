import React from "react";

function CheckoutPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>Checkout</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card style={{ width: "45%" }}></Card>
        <Card style={{ width: "45%" }}>
          <card.Header>
            <h3 className="text-center">Review Pesanan</h3>
          </card.Header>
        </Card>
      </div>
    </div>
  );
}

export default CheckoutPage;
