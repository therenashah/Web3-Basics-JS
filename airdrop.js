
const solanaweb3 = require("@solana/web3.js");
const a = (async()=>{
const connection = new solanaweb3.Connection(solanaweb3.clusterApiUrl("devnet"), "confirmed");
const publickey = solanaweb3.Keypair.generate().publickey

let tokenAmount = await connection.getBalance(publicKey);
console.log('amount: $(tokenAmount)');

const airdropSignature = await connection.requestAirdrop(publickey,
2*solanaweb3.LAMPORTS_PER_SOL);
await connection.confirmTransaction(airdropSignature);

tokenAmount = await connection.getBalance(publickey);
console.log('amount: $(tokenAmount)');
})