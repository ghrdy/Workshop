import pkg from "@woocommerce/woocommerce-rest-api";
import { sendProductToWooCommerce } from "../services/woocomerce.js";
describe("sendProductToWooCommerce", () => {
  const mockProduct = {
    name: "GBA-Tim",
    customOptions: {
      consoleToBuy: true,
      case: "black",
      backCase: "black",
      screen: "black",
      buttons: "black",
      pads: "black",
      gurt: "black",
      specialCase: "",
      stickers: "",
      batteryInstall: false,
      ledInstall: false,
      ledTriggerInstall: "",
      dpadInstall: false,
      ampAudio: false,
      accessories: ["RetroMetroidBag"],
    },
    finalPrice: 150,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should create a product and return the add to cart URL", async () => {
    const mockPostResponse = {
      data: {
        id: 123,
      },
    };

    pkg.default().post.mockResolvedValue(mockPostResponse); // Mimer la réponse de l'API

    const addToCartUrl = await sendProductToWooCommerce(mockProduct);

    expect(pkg.default().post).toHaveBeenCalledWith("products", {
      name: mockProduct.name,
      type: "simple",
      regular_price: mockProduct.finalPrice.toString(),
      description: "Produit personnalisé créé via API.",
      images: [{ id: 19 }],
      attributes: expect.any(Array),
    });

    expect(addToCartUrl).toBe(
      "https://api-retrometroid.devprod.fr/?add-to-cart=123"
    );
  });

  it("should handle errors thrown by the WooCommerce API", async () => {
    pkg.default().post.mockRejectedValue(new Error("API Error"));

    await expect(sendProductToWooCommerce(mockProduct)).rejects.toThrow(
      "API Error"
    );
    expect(console.error).toHaveBeenCalledWith(
      "Erreur lors de l'envoi du produit à WooCommerce:",
      expect.any(Error)
    );
  });
});
