from cryptography.fernet import Fernet

# Step 1: Generate and Save a Key
def generate_key():
    key = Fernet.generate_key()
    with open("secret.key", "wb") as key_file:
        key_file.write(key)
    print("Key generated and saved as 'secret.key'")

# Step 2: Load the Key
def load_key():
    return open("secret.key", "rb").read()

# Step 3: Encrypt a Message
def encrypt_message(message):
    key = load_key()
    fernet = Fernet(key)
    encrypted_message = fernet.encrypt(message.encode())
    with open("encrypted_message.txt", "wb") as encrypted_file:
        encrypted_file.write(encrypted_message)
    print("Message encrypted and saved to 'encrypted_message.txt'")

# Step 4: Decrypt the Message
def decrypt_message():
    key = load_key()
    fernet = Fernet(key)
    with open("encrypted_message.txt", "rb") as encrypted_file:
        encrypted_message = encrypted_file.read()
    decrypted_message = fernet.decrypt(encrypted_message)
    print("Decrypted message:", decrypted_message.decode())

# Menu for the Demo
def menu():
    print("Choose an option:")
    print("1. Generate a Key")
    print("2. Encrypt a Message")
    print("3. Decrypt a Message")
    choice = input("Enter your choice: ")
    
    if choice == "1":
        generate_key()
    elif choice == "2":
        message = input("Enter a message to encrypt: ")
        encrypt_message(message)
    elif choice == "3":
        decrypt_message()
    else:
        print("Invalid choice. Please try again.")

if __name__ == "__main__":
    menu()
