package CSE18;

public class TestClass {
public static void main(String args[]) {
	BankAccount bal = new SavingAccount("Kamal",456,50000000);
	
	System.out.println("Account Holder Name");
	System.out.println(bal.getAccountHolder());
	
	System.out.println("Account Number");
	System.out.println(bal.getAccountNumber());
	
	System.out.println("Balance");
	System.out.println(bal.getBalance());
	
	System.out.println("Deposit 30000Rs");
	System.out.println("Current Balance:");
	bal.deposit(20000.0);
	
	System.out.println("Deposit 30000Rs");
	System.out.println("Current Balance:");
	bal.deposit(3000);
	
	System.out.println("Deposit 20000Rs");
	System.out.println("Current Balance:");
	bal.deposit(50000.0,"UPI");
	
	SavingAccount sa1 = new SavingAccount("ABC",123,500000);
	sa1.calculateInterest();
	
	CurrentAccount ca1 = new CurrentAccount("XYZ",456,400000);
	ca1.calculateInterest();
}
}
