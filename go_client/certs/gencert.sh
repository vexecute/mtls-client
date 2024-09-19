openssl genpkey -algorithm Ed25519 -out client.key
openssl req -new -key client.key -out client.csr -subj '/CN=client-192.168.1.5'
