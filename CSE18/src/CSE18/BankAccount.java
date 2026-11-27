package CSE18;

public class BankAccount {
 private String AccountHolder;
 private long AccountNumber;
 private double Balance;

BankAccount(String AccountHolder, long AccountNumber, double Balance){
	this.AccountHolder = AccountHolder;
	this.AccountNumber = AccountNumber;
	this.Balance = Balance;
}
public String getAccountHolder() {
	return AccountHolder;
}
public long getAccountNumber() {
	return AccountNumber;
}
public double getBalance() {
	return Balance;
}
public void deposit(double amount) {
	Balance = Balance + amount;
	System.out.println(Balance);
}
public void deposit(int amount) {
	Balance = Balance + amount;
	System.out.println(Balance);
}
public void deposit(double amount, String method) {
	Balance = Balance + amount;
	System.out.println(Balance+"Method: "+ method);
}

void calculateInterest() {
	double Interest = Balance*0.02;
	System.out.println(Interest);
}
void calculateInterest1() {
}

}
