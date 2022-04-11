export const Rank = {
  value: -1,

  get Responder(): number {
    this.value = 0;
    return this.value;
  },
  get Manager(): number {
    this.value = 1;
    return this.value;
  },
  get Director(): number {
    this.value = 2;
    return this.value;
  },
  getValue(): number {
    return this.value;
  },
};
