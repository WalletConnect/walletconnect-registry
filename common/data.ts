import dapps from "../public/data/dapps.json";
import wallets from "../public/data/wallets.json";

export function getAll(TOP = 20) {
  const top = {
    dapps: Object.keys(dapps).slice(0, TOP - 1),
    wallets: Object.keys(wallets).slice(0, TOP - 1),
  };
  const others = {
    dapps: Object.keys(dapps).slice(TOP - 1),
    wallets: Object.keys(wallets).slice(TOP - 1),
  };
  const data = {};
  top.wallets.forEach((key) => (data[key] = wallets[key]));
  top.dapps.forEach((key) => (data[key] = dapps[key]));
  others.wallets.forEach((key) => (data[key] = wallets[key]));
  others.dapps.forEach((key) => (data[key] = dapps[key]));
  return data;
}

export function getWallets() {
  return wallets;
}

export function getDapps() {
  return dapps;
}
