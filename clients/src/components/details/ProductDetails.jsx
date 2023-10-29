import React from "react";
import { Box, Typography,styled,TableRow,TableCell,TableBody,Table } from "@mui/material";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {LocalOffer as Badge} from "@mui/icons-material";

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const ProductDetails = ({ product }) => {
      const adURL =
        "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
      const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & reviews
        <Box component="span">
          <img
            src="/fassured.jpg"
            alt="ratings"
            style={{ width: 77, marginLeft: 20 }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹ {product.price.cost} &nbsp;
        </Box>
        &nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike> ₹{product.price.mrp}</strike> &nbsp;
        </Box>
        &nbsp;
        <Box component="span" style={{ color: "#388e3c" }}>
          {product.price.discount} &nbsp;
        </Box>
        &nbsp;
      </Typography>
      <Typography>Available offers</Typography>
      <SmallText>
        <Typography>
          <Badge />
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
        </Typography>
        <Typography>
          <Badge />
          Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time
          transaction, Terms and Condition apply
        </Typography>
        <Typography>
          <Badge />
          Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select
          ACs
        </Typography>
        <Typography>
          <Badge />
          Partner OfferExtra 10% off upto ₹500 on next furniture purchase
        </Typography>
        <Typography>
          <Badge />
          Bank OfferExtra ₹1,000 off on ICICI Bank Debit Card Non-EMI Txns on
          products priced ₹24,990 and aboveT&C
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <span style={{ color: "#2874f0" }}>SuperComNet</span>
              <Typography>GST invoice available</Typography>
              <Typography>View more sellers starting from ₹329</Typography>
            </TableCell>
          </ColumnText>
          <TableRow>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} alt="addurl" />
            </TableCell>
          </TableRow>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetails;
