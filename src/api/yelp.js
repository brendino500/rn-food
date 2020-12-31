import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer HOKIQd0qmIAm1wPhx7HWR_sgVuWkiWtGSgKPX53dXl--g6P68xRksjExbhj55M_I2PLpzC9BXcRpD_GFt3fIafy6ziHaBrStZG4tlTS-ntsH5-fd-8Sr7RooHZXoX3Yx",
  },
});
