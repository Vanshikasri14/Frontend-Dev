const user = {
  name: "Asha",
  showName: () => {
    console.log("arrow showName -> this.name:", this.name);
  }
};
user.showName();

const userFixed = {
  name: "Asha",
  showName() {
    console.log("normal showName -> this.name:", this.name);
  }
};
userFixed.showName();
