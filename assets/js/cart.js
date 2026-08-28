/* Kinect Innovations LLC — Cart engine
   Stores cart in localStorage under "kinect_cart_v1".
   Cart items: { id, name, price, unit, qty }
*/

const KINECT_CART_KEY = "kinect_cart_v1";

const KinectCart = {
  read() {
    try {
      const raw = localStorage.getItem(KINECT_CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Cart read error:", e);
      return [];
    }
  },

  write(items) {
    localStorage.setItem(KINECT_CART_KEY, JSON.stringify(items));
    KinectCart.updateBadge();
    document.dispatchEvent(new CustomEvent("kinect-cart-updated", { detail: items }));
  },

  add(item, qty = 1) {
    const items = KinectCart.read();
    const existing = items.find(i => i.id === item.id);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ id: item.id, name: item.name, price: item.price, unit: item.unit || "", qty });
    }
    KinectCart.write(items);
  },

  updateQty(id, qty) {
    let items = KinectCart.read();
    qty = Math.max(1, Math.min(99, parseInt(qty, 10) || 1));
    items = items.map(i => (i.id === id ? { ...i, qty } : i));
    KinectCart.write(items);
  },

  remove(id) {
    const items = KinectCart.read().filter(i => i.id !== id);
    KinectCart.write(items);
  },

  clear() {
    KinectCart.write([]);
  },

  count() {
    return KinectCart.read().reduce((sum, i) => sum + i.qty, 0);
  },

  subtotal() {
    return KinectCart.read().reduce((sum, i) => sum + i.qty * i.price, 0);
  },

  updateBadge() {
    document.querySelectorAll(".cart-badge").forEach(el => {
      const c = KinectCart.count();
      el.textContent = c;
      el.setAttribute("data-count", c);
    });
  },

  formatMoney(n) {
    return "$" + n.toFixed(2);
  }
};

document.addEventListener("DOMContentLoaded", KinectCart.updateBadge);
