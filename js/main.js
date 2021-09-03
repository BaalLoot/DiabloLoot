
const DiabloLootAddress = ""

let lootContract

async function getContractData(){
  let totalSupply = await lootContract.totalSupply()
  console.log("totalSupply:", totalSupply.toString())
  document.getElementById("mintedAmount").innerHTML = totalSupply.toString();
}

async function StartUpdater(){
  await getContractData()

  setInterval(async function (){
    await getContractData()
  }, 10000)
}

document.addEventListener('DOMContentLoaded', async (event) => {
  //the event occurred
  return
  // const provider = new ethers.providers.JsonRpcProvider();
  let provider = ethers.getDefaultProvider('rinkeby');
  lootContract = new ethers.Contract(DiabloLootAddress, abi, provider);
  await StartUpdater()


})

async function doSummon(){

  // await window.ethereum.enable()
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  // const signer = provider.getSigner()
  // let lootContract = new ethers.Contract(DiabloLootAddress, abi, signer);
  // await lootContract.claim()
}
