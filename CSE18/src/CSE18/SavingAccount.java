package CSE18;


public class SavingAccount extends BankAccount{
SavingAccount(String AccountHolder, long AccountNumber, double Balance){
	super(AccountHolder, AccountNumber, Balance);
	
}
@Override 
void calculateInterest() {
	double interest = getBalance()*0.05;
	System.out.println(interest);
}
}
