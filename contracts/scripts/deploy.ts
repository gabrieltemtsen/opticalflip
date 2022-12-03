import hre from "hardhat";

async function main() {
  const OpticalFlip = await hre.ethers.getContractFactory("OpticalFlip");
  const opticalFlip = await OpticalFlip.deploy();

  await opticalFlip.deployed();

  console.log("OpticalFlip deployed to:", opticalFlip.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
